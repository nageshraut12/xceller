import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

export async function createContact(req, res, next) {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        message: 'Contact form is temporarily unavailable. Please try again later.'
      });
    }

    const contact = await Contact.create(req.body);

    res.status(201).json({
      message: 'Thank you for contacting Xceller IT Services.',
      data: contact
    });
  } catch (error) {
    next(error);
  }
}
