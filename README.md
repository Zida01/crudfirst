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
