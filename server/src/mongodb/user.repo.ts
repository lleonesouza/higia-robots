import {Model} from 'mongoose'
import IUser from '../interfaces/user.type.d';


export default (Model:Model<IUser, {}>) => {
    return Object.freeze({
        createUser: async (customer:any) => {
            return await Model.create(customer)
        },
        findByEmail: async (email:string) => {
            return await Model.findOne({email})
        },
        findById: async (id:string) => {
            return await Model.findById(id, 'email')
        },
        findByIdAndDelete: async (id:string) => {
            return await Model.findByIdAndDelete(id)
        },
        findByIdAndUpdate: async (id:string, data:IUser) => {
            return await Model.findByIdAndUpdate(id, data)
        },
        findByIdAndDesactive: async (id: string) => {
            return await Model.findByIdAndUpdate(id, {activated: false})
        },
        findByIdAndActive: async (id: string) => {
            return await Model.findByIdAndUpdate(id, {activated: true})
        }
    })
}