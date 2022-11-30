export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@') || !name || name.trim() === '' || !message) {
      res.status(422).json({ message: 'Invalid input.'});
      return;
    }

    // TODO Persist messages to the Database
    const newMessage = {
      email,
      name,
      message
    };

    res.status(201).json({ message: 'Successfully stored message!', message: newMessage});
  }
}