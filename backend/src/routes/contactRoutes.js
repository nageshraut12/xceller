import { Router } from 'express';
import { body } from 'express-validator';
import { createContact } from '../controllers/contactController.js';
import { validateRequest } from '../middleware/validateRequest.js';

const router = Router();

router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required.'),
    body('email').isEmail().withMessage('Valid email is required.'),
    body('message')
      .trim()
      .isLength({ min: 20 })
      .withMessage('Message must be at least 20 characters.')
  ],
  validateRequest,
  createContact
);

export default router;
