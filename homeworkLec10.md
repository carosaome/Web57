

Danh sách sản phẩm có giá bán từ 50000 đến 100000

```
        ProductModel.find({
                price:{$gte :50000,
                $lte:100000})

```
Danh sách sản phẩm có title hoặc description chứa từ khoá "áo" (không phân biệt hoa thường)

```
        ProductModel
            .find({
                $or: [
                        {title      : { $regex: new RegExp('áo', i) }},
                        {description: { $regex: new RegExp('áo', i) }}
                     ]
                })

```
Danh sách sản phẩm không thể bán (hết số lượng tồn kho)

```
        ProductModel.find({stockQuantity:0})


```

Danh sách sản phẩm được đánh giá cao (có rating lớn hơn hoặc bằng 4)
```
                ProductModel.find({rating:{%gte:4}})


```


Danh sách sản phẩm trending (có lượt view từ 2000) sắp xếp theo chiều giảm dần số view
```
    ProductModel
        .find({views:{$gte:2000}})
        .soft({views:-1})


```

Danh sách sản phẩm có tags là "nam"

```
        ProductModel.find({tags:'nam'})


```

Danh sách sản phẩm theo giá bán tăng dần

```
    ProductModel
        .find({})
        .sort({price: +1})

```

Danh sách sản phẩm thuộc danh mục "Quần áo" bán chạy (số lượng bán ra lớn hơn 100) sắp xếp theo bảng chữ cái alphabet tăng dần của title
```
 ProductModel
        .find({category:'Quần áo'}, {sellQuantity:{$gt:100}} )
        .soft({title:1})
```

[Nâng cao] Cho từ khoá "khăn quang" (Người dùng nhập từ khăn có dấu còn từ quàng không có dấu), làm thế nào để ra được danh sách các sản phẩm có từ khoá "khăn quàng"
```
        <!-- In Product Model -->
        const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Products = new Schema({
    title: String,
    slugTitle: {type:String, slug:"title", unique:true},
    description: String,
    slugDesc: {type:String, slug:"title", unique:true},
    rating: Number,
    viewCount: Number,
    imageUrl: String,
    tags: [],
    category: String,
    price: Number,
    sellQuantity: Number, // số lượng bán ra
    stockQuantity: Number // số lượng tồn kho
}, {
    timestamps: true,
}
);

module.exports = mongoose.model('Products', Products)



        <!-- Controller -->

        const  {keyworkRaw} = req.param
        const  keywork      = slugify(keyworkRaw)
        const  regex        = new RegExp(keywork, i)

        const products = await ProductModel.find({ 
                $or: [
                       {slugTitle:  {$regex: regex}},
                       {slugDesc :  {$regex: regex}},
                     ]
                

```
