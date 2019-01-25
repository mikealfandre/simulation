
module.exports = {

    getAll: function(req, res){
        const db = req.app.get('db')

        db.get_inventory()
            .then((inventory) => res.status(200).send(inventory))
            .catch((err) => res.status(500).send(err))
     },
     
     createProduct: function(req, res){
         const db = req.app.get('db')
         const {image_url, name, price} = req.body

         db.create_product([image_url, name, price])
            .then(() => {res.status(200)})
            .catch((err) => {res.status(500).send(err)})
     },

     deleteProduct: function(req, res){
         const db = req.app.get('db')
         const {id} = req.params

         db.delete_product(id)
            .then(() => res.status(200).send())
            .catch((err) => {res.status(500).send(err)})
     }
         
     


}