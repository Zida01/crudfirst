<tr>
                  <td>1</td>
                  <td>image</td>
                  <td>EMMANUEL OLABISI</td>
                  <td>OLATY@GMAIL.COM</td>
                  <td>09129394</td>
                  <td>
                    <a href="" class="text-success"
                      ><i class="fas fa-edit fa-lg mx-1"></i
                    ></a>
                    <a href="" class="text-danger"
                      ><i class="fa-solid fa-trash-can"></i
                    ></a>
                  </td>
                </tr>

/\*\*
\*\*
/

try {

        let id = req.params.id
        await user.findById(id).then(result => {
            if (result.image) {
               // CloudinaryStorage.uploader.upload.destroy(result.image)

            }// let { name, email, phone } = req.body
            const data = {
                name: req.body.name,

                email: req.body.email,
                phone: req.body.phone,
                image: req.file.path
            }

            const people = user.findByIdAndUpdate(id, data).then(result => {
                console.log(result)
            })
            people();


        })




    for(i=0; i<req.body.DescripcionBusqueda.length;i++){
        var sdoc = {};
        if(req.body.DescripcionCHANGED[i]) {
          sdoc['Descripcion'] = req.body.Descripcion[i]
        }
        if(req.body.CodigoCHANGED[i]) {
          sdoc['Codigo'] = req.body.Codigo[i]
        }
        if(req.body.UnidadCHANGED[i]) {
          sdoc['Unidad'] = req.body.Unidad[i]
        }
        //  etc. etc.....

        material.updateOne(
                {Descripcion:req.body.DescripcionBusqueda[i]},
                {$set: sdoc},
                { upsert: false });
    }



    }

    catch (error) {


    }

/**\*
** UPDate and destroy cloudinary
\*\*
??

/\*\*\*

- NEW UPDATE TEST WITH CLOUDINARY
- \*/

// router.post('/edit/:id', async (req, res) => {
// try {

// let { name, email, phone } = req.body

// const updates = new User({
// name,
// email,
// phone,

// })

// console.log(updates);
// // let id = req.params.id;
// const updateuser = await User.findby(req.params.id, { updates }, { new: true });

// // we cannot find any product in database
// if (!updateuser) {
// console.log("failed");
// }
// console.log(updateuser);
// return res.status(200).json(updateuser)
// // const updatedProduct = await user.findById();
// //res.status(200).json(updatedProduct);
// } catch (error) {
// res.status(500).json({ message: error.message })
// }
// })

/\*\*

- the id is from mongodb
- i want to run the code now
- i didnt get what you said
- the result his not changing
- \*/

/\*\*

- UPDATE ROUTE FOR USER --> WITH UPDATE IMAGE ON CLOUDINARY
- \*/

// router.post('/update/:id', upload.single('image'), async (req, res) => {
// try {

// let { name, email, phone } = req.body

// const createduser = new user({

// name,
// email,
// phone,
// // image:result.public_id

// })

// await user.findById(req.params.id).then(result => {
// if (result.image != '') {
// const imag = result.image
// const url = imag.split('/');
// const fimage = url[url.length - 1]
// const imagedel = fimage.split('.')[0]
// console.log(imagedel);
// //split image url to get public key for deletion ( public_id is needed for deletion )
// // console.log(result.image)
// if (imagedel) {
// const myimag = cloudinary.uploader.destroy(req.params.id, imagedel)
// console.log("img deleted");
// }
// cloudinary.uploader.upload(req.body.image).then(result => {
// createduser.image = result.secure_url
// })

// }
// const updimage = user.findByIdAndUpdate(req.params.id, createduser, { new: true })

// }).catch(error => {
// console.log(`${error}  unable to deleted old image`);
// })

// } catch (error) {
// console.log(error);

// }
// })
