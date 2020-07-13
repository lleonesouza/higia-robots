/*
Avoids obstacles found by ultrasonic sensor on a servo.
*/

#include <Servo.h>
#include <NewPing.h>

// motor control pins

const int in1 = 4;
const int in2 = 5;
const int in3 = 1;
const int in4 = 2;
const int enA = 6; // PWM
const int enB = 3; // PWM

// ultrasonic pins

const int trig = A0;
const int echo = A1;

// button to start program
const int button = 12;

// servo pin
const int servoPin = 8;

Servo servo; // servo object

NewPing sonar(trig, echo); // ultrasonic sensor

bool running = false; // variable used to wait for button press
int distance[5]; // _\|/_ 0 - 4
int servoAngles[5] = {180, 135, 90, 45, 10};
int currentPos = 0; // 0 for left, 1 for right

// Minimum distance for car to keep driving in the same direction
int minForward = 30;
int minDiagonal = 25;
int minSide = 20;

void forward(int time, int left=255, int right=255);
void backward(int time, int left=255, int right=255);

void setup() {
	pinMode(in1, OUTPUT);
	pinMode(in2, OUTPUT);
	pinMode(in3, OUTPUT);
	pinMode(in4, OUTPUT);
	pinMode(enA, OUTPUT);
	pinMode(enB, OUTPUT);

	pinMode(button, INPUT_PULLUP);

	servo.attach(servoPin);
	servo.write(90); // Start in the middle so robot looks good

	// Serial.begin(9600); // Debugging
}

void loop() {
	wait();
	setDistanceArray();
	avoid();
}

void wait() {
	// Wait for button press
	while (!running && digitalRead(button)) {

	}
	if (!running) { // Button has just been pressed
		delay(1000); // time to move finger away
		running = true;
		servo.write(180);
		delay(200);
	}
}

void forward(int time, int left, int right) {
	// Moves forward for (time) milliseconds
	analogWrite(enA, right);
	analogWrite(enB, left);
	digitalWrite(in1, HIGH);
	digitalWrite(in2, LOW);
	digitalWrite(in3, HIGH);
	digitalWrite(in4, LOW);
	delay(time);
}

void backward(int time, int left, int right) {
	// Moves backward for (time) milliseconds
	analogWrite(enA, right);
	analogWrite(enB, left);
	digitalWrite(in1, LOW);
	digitalWrite(in2, HIGH);
	digitalWrite(in3, LOW);
	digitalWrite(in4, HIGH);
	delay(time);
}

void spinLeft(int time) {
	// Spins counterclockwise for (time) milliseconds
	analogWrite(enA, 255);
	analogWrite(enB, 255);
	digitalWrite(in1, HIGH);
	digitalWrite(in2, LOW);
	digitalWrite(in3, LOW);
	digitalWrite(in4, HIGH);
	delay(time);
}

void spinRight(int time) {
	// Spins clockwise for (time) milliseconds
	analogWrite(enA, 255);
	analogWrite(enB, 255);
	digitalWrite(in1, LOW);
	digitalWrite(in2, HIGH);
	digitalWrite(in3, HIGH);
	digitalWrite(in4, LOW);
	delay(time);
}

void stop() {
	// Stops all motors
	digitalWrite(in1, LOW);
	digitalWrite(in2, LOW);
	digitalWrite(in3, LOW);
	digitalWrite(in4, LOW);
	analogWrite(enA, 0);
	analogWrite(enB, 0);
}

void resetPWM() {
	// Sets PWM to 255 for full speed
	analogWrite(enA, 255);
	analogWrite(enB, 255);
}

int distanceAngle(int a) {
	// returns distance when the servo is turned at angle a
	// a > 90: left, a < 90: right, a = 90: straight
	servo.write(a);
	delay(100); // speed 120ms / 60 degrees, so minimum 90ms here for 45 degrees
	return sonar.ping_cm();
}

void setDistanceArray() {
	// Put distances for 5 positions _\|/_ into distance array
	if (currentPos == 0) {
		for (int p = 0; p <= 4; p++) {
			distance[p] = distanceAngle(servoAngles[p]);
			if (distance[p] == 0) { // ping_cm returns 0 when object is > 500 cm
				distance[p] = 1000;
			}
		}
		currentPos = 1;
	}
	else {
		for (int p = 4; p >= 0; p--) {
			distance[p] = distanceAngle(servoAngles[p]);
			if (distance[p] == 0) {
				distance[p] = 1000;
			}
		}
		currentPos = 0;
	}
}

void avoid() {
	if (distance[2] < minForward) { // need to go backwards
		if (currentPos == 0) {
			spinLeft(random(300, 1700)); // spin randomly
		}
		else {
			spinRight(random(300, 1700));
		}
	}
	else if (distance[1] < minDiagonal || distance[0] < minSide) { // left diagonal
		spinRight(random(500, 1500));
	}
	else if (distance[3] < minDiagonal || distance[4] < minSide) { // right diagonal
		spinLeft(random(500, 1500));
	}
	else {
		forward(0, 120, 120);
		return; // Exit loop() function and don't stop motors
	}
	stop();
}