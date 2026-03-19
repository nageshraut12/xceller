import Contact from '../models/Contact.js';

export async function createContact(req, res, next) {
  try {
    const contact = await Contact.create(req.body);

    res.status(201).json({
      message: 'Thank you for contacting Xceller IT Services.',
      data: contact
    });
  } catch (error) {
    next(error);
  }
}
