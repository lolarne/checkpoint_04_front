import './postForm.css';
import { useState } from 'react';
import axios from 'axios';
import { FETCH } from '../../Fetch.js';

const PostForm = () => {
    const [nameImg, setNameImg] = useState("");
    const [category, setCategory] = useState("");
    const [color, setColor] = useState(0);
    const [date, setDate] = useState("");
    const [material, setMaterial] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${FETCH}/galerie`, {
            name: nameImg,
            category: category,
            color: color,
            date_creation: date,
            material: material,
        })
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    return (
        <form>
            <label> Nom :
                <input type="text" name="name" value={nameImg} onChange={(e) => setNameImg(e.target.value)} required />
            </label>
            <label> Catégorie :
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option selected value="">...</option>
                    <option value="landscape">Paysage</option>
                    <option value="animal">Animaux</option>
                    <option value="cartoon">Cartoon</option>
                    <option value="abstract">Abstrait</option>
                    <option value="mandala">Mandala</option>
                </select>
            </label>
            <label> Matériels :
                <select onChange={(e) => setMaterial(e.target.value)}>
                    <option selected value="">...</option>
                    <option value="crayon">Crayon de couleur</option>
                    <option value="marker">Feutre</option>
                    <option value="alcohol">Feutre à alcool</option>
                    <option value="paint">Peinture</option>
                    <option value="sew">Couture</option>
                    <option value="collage">Collage</option>
                </select>
            </label>
            <label>Coloration :</label>
            <label for="yes">Couleur</label>
            <input
                type="radio"
                name="color"
                value="1"
                onChange={(e) => setColor(e.target.value)}
                required
            />
            <label for="no">Noir & Blanc</label>
            <input
                type="radio"
                name="color"
                value="0"
                onChange={(e) => setColor(e.target.value)}
                required
            />
            <label> Date:
                <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </label>
            <button type="submit" value="submit" onClick={handleSubmit}>Envoyer</button>
        </form>
    );
}

export default PostForm;