import './postForm.css';
import { useEffect , useState } from 'react';
import axios from 'axios';
import { FETCH } from '../../Fetch.js';
import FileUpload from '../fileUpload/FileUpload.jsx';

const PostForm = () => {
    const [Illustration, setIllustration] = useState([]);
    const [nameImg, setNameImg] = useState("");
    const [category, setCategory] = useState("");
    const [color, setColor] = useState(0);
    const [date, setDate] = useState("");
    const [material, setMaterial] = useState("");

    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("");
    const [uploadedFile, setUploadedFile] = useState({});

    useEffect(()=>{
        axios.get(`${FETCH}/galerie`).then((res)=> setIllustration(res.data));
    }, []);

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const handleUpload = async (e) => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post(`${FETCH}/upload`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            const { fileName, filePath } = res.data;

            setUploadedFile({ fileName, filePath });

        } catch (err) {
            let message;
            if (err.response.status === 500) {
                message = "There was a problem with the server";
            } else {
                message = "Everything went fine";
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${FETCH}/galerie`, {
            name: nameImg,
            category: category,
            color: color,
            date_creation: date,
            material: material,
            img: uploadedFile.filePath,
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
            <label>Image :
                <FileUpload
                className="imageForm"
                  method={(e) => {
                    e.preventDefault();
                    handleUpload();
                  }}
                  onChange={(e) => {
                    onChange(e);
                  }}
                  fileName={uploadedFile.fileName}
                  filePath={uploadedFile.filePath}
                />
                </label>
            <button type="submit" value="submit" onClick={handleSubmit}>Envoyer</button>
        </form>
    );
}

export default PostForm;