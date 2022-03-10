# Bài1 :
`let obj1 = {x:20, y:30};
function cloneDeep(obj){
    return {...obj}
}
const obj2 = cloneDeep(obj1)
obj2.x = 10` 

# Bai 2:
Result
[ 'macbook2015', { model: 'm1' }, 'macbook2017' ]
[ 'air', { model: 'm1' }, 'macbook2017' ]

Explain:
    +, Đầu tiên là do sử dụng Shallow coppying, nên chỉ những giá trị nguyên thủy là 'macbook2015', và 'macbook2017' được lưu ở ô nhớ mới.
    Còn object{model:'macbook2014'} vẫn lưu ở ô nhớ cũ, khi ta thay đổi,`apples[1].model = 'm1'` do cùng chỉ vào 1 địa chỉ ô nhớ nên ta được kết quả như trên

# Bai 3:
`var text = 'outside';
function show() {
    console.log(text) //1
    var text = 'inside';
}`
    Kết quả in ra sẽ là undefind: 
    Theo em thì: func show có log ra text ở dòng trên nhưng dòng dưới lại thay đổi giá trị của text -> theo cơ chết hoisting thì nó sẽ tự khai báo 1 thằng text lên trên và do thằng text này kh có giá trị -> undefind



# Bai5:
        Kết quả in ra là: 1
                          2
                          1
        Do tính chất tạo ra biến global của closure: lần chạy thứ nhất giias trị của count sẽ được gắn là 1, mỗi lần chạy như thế giá trị của count sẽ được lưu lại tại biến global cho nên kh bị reset lại.
                                                                                
# Bai6:
    Thứ tự của đoạn code `console.log("hello");

setTimeout(() => console.log("world"), 0);

console.log("hi");`

sẽ là hello
      hi
      world

Theo ý hiểu của em thì: Cơ chế hoạt động của JS là đơn luồng. Do đó có rất nhiều hạn chế khi ta dùng hàm settimeout, hoặc onclick,vvv vì khi như thế nó phải chờ hàm settimeout chạy xong thì đoạn code đằng sau mới chạy được.


=> + sinh ra Call: func, sẽ lần lượt thêm vào đây: thứ tự thực hiện là thằng nào vào trước thì chạy trước, thằng nào vào sau chạy sau
   + event Queue: Web apis, onClick,vv sẽ được đẩy vào hàng đợi này, đợi để thực thi.

trong quá trình này eventloop sẽ liên tục thêm func vào stack và chờ khi nào cần thì sẽ gọi func trong event Queue ra
