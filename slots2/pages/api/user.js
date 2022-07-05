import data from '../../data/user-data.json';

export default function user(req, res) {
    res.status(200).json(data)
}