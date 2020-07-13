const makeItemController = ({ useCases }: any) => {
    return {
      get: async (req: any, res: any, next: any) => {
        try {
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
    },
    put: async (req: any, res: any, next: any) => {
      try {
        res.send(useCases);
      } catch (err) {
        console.log(err);
      }
    },
      post: async (req: any, res: any, next: any) => {
        try {
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
    },
    delete: async (req: any, res: any, next: any) => {
      try {
        res.send(useCases);
      } catch (err) {
        console.log(err);
      }
    }
  }
}
  export default makeItemController