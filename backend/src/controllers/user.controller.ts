import { Request, RequestHandler, Response } from 'express';
import { ParsedQs } from 'qs';
import { UserService } from '../services/user.service';

export class UserController {
    static getUserById: RequestHandler<{ id: string; }, any, any, ParsedQs, Record<string, any>>;
    static getAllUsers(_arg0: string, _getAllUsers: any) {
        throw new Error('Method not implemented.');
    }
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async getAllUsers(__req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching users', error });
        }
    }

    async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const userId = parseInt(req.params.id, 10);
            const user = await this.userService.getUserById(userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user', error });
        }
    }
}