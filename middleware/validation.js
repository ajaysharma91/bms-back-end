exports.userValidation = async (req, res, next) => {
    const { name, username, email, password } = req.body;
    let message = ''
    if (name === '' || !name) message = 'Name is Required Field';
    else if (username === '' || !username) message = 'User Name is Required Field';
    else if (password === '' || !password) message = 'Password is Required Field';
    else if (email === '' || !email) message = 'Email is Required Field';

    if (message !== '') return res.status(200).json({ succes: false, message: `${message} Please Fill.` })
    next()
}

exports.catValidation = async (req, res, next) => {
    const { name, type } = req.body
    let message = ''
    if (!name || name === '') message = 'name is required'
    else if (!type || type === '') message = 'type is required'
    if (message !== '') return res.status(200).json({ succes: false, message: `${message} Please Fill.` })
    next()
}
