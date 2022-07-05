import data from '../../data/cust-data.json';

export default function cust(req, res) {
    res.status(200).json(data)
}