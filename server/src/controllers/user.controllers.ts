import {user} from '../use-cases'
import {Request, Response } from 'express'
const makeUserController = ({}: any) => {
    return {
      get: async (req: Request, res: Response, {}: any) => {
        try {
          const {email} = req.body
          const _user = await user.getUser(email)
          res.status(200).json(_user)
        } catch (err) {
          res.status(400).json(err)
        }
    },
    put: async (req: Request, res: Response, {}: any) => {
      try {
        const {email} = req.body
        const _user  = await user.updateUser(email, req.body)
        res.status(200).json(_user)
      } catch (err) {
        res.status(400).json(err)
      }
    },
      post: async (req: Request, res: Response, {}: any) => {
        try {
      
          const _user  = await user.createUser(req.body)
          res.status(200).json(_user)
        } catch (err) {
          res.status(400).json(err)
        }
    },
    delete: async (req: Request, res: Response, {}: any) => {
      try {
        const {email} = req.body
        const _user  = await user.desactiveUser(email)
        res.status(200).json(_user)
      } catch (err) {
        res.status(400).json(err)
      }
    }
  }
}
  export default makeUserController