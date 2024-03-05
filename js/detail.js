const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

//chọn size
let radioButtons = document.querySelectorAll('input[name="size"]');
radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("click", function () {
    let selectedValue = this.value;
    document.getElementById("selected-size").innerHTML = selectedValue;
  });
});

//validation button giỏ hàng
function validateSizeSelection() {
  let selectedSize = document.querySelector('input[name="size"]:checked');

  if (selectedSize === null) {
    document.getElementById("selected-size").innerHTML = "Bạn chưa chọn size";
    return false;
  } else {
    //Bỏ vô hàm giỏ hàng: chú ý: chưa có hàm này
    return true;
  }
}
document.querySelector(".btnThem").onclick = validateSizeSelection;

//filter địa chỉ tỉnh có trong modal
function filterAddresses() {
  var selectElement = document.getElementById("address_province");
  var selectedProvince = selectElement.value;

  var addressItems = document.querySelectorAll(".address_item");
  for (var i = 0; i < addressItems.length; i++) {
    var addressItem = addressItems[i];
    var dataProvince = addressItem.getAttribute("data-province");

    if (selectedProvince === "all" || dataProvince === selectedProvince) {
      addressItem.style.display = "block";
    } else {
      addressItem.style.display = "none";
    }
  }
}

// async function hienThiTatCaGiay() {
//   try {
//     //Nơi xử lí các đoạn code
//     let promise = {
//       url: `https://shop.cyberlearn.vn/api/Product/getbyid`,
//       method: "GET",
//     };
//     console.log(promise);
//   } catch (error) {
//     //Nơi xử lí lỗi khi xảy ra
//     console.log(error);
//   }
// }
// hienThiTatCaGiay();

// const getProductsDetail = async (id) => {
//   console.log("id", id);

//   let promise = await axios({
//     url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}",
//     method: "GET",
//     responseType: "json",
//   });
//   return promise.data.content;
// };
// console.log(getProductsDetail(1));

// function renderDataProduct(arr) {
//   var content = "";
//   // chạy vòng lặp duyệt qua dữ liệu
//   for (var i = 0; i < arr.length; i++) {
//     // log và kiểm tra cấu trúc object đang được đưa lên giao diện
//     console.log(arr[i]);
//     var product = arr[i];
//     content += `

//     `;
//   }
// dom tới và đưa dữ liệu lên
// document.querySelector("").innerHTML = content;
// }
