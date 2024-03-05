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

function getAllGiay() {
  // B1 sử dụng axios để truy xuất dữ liệu từ máy chủ
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  promise
    .then(function (res) {
      // thành công
      // console.log(res.data.content);
      renderGiayKhac(res.data.content);
      renderCareGiay(res.data.content);
      renderGiayNew(res.data.content);
      // renderDetal(res.data.content);
    })
    .catch(function (err) {
      // thất bại - có lỗi
      console.log(err);
    });
}
getAllGiay();

// hienThiTatCaGiay();
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

function renderGiayKhac(arr) {
  // console.log(arr);
  let content = "";
  // chạy vòng lặp duyệt qua dữ liệu
  for (let i = 0; i < arr.length; i++) {
    // log và kiểm tra cấu trúc object đang được đưa lên giao diện
    // console.log(arr[i]);
    let product = arr[i];
    content += `
    <div class="different_item1">
      <div class="different_img">
      <a href="#">
        <img
          src="${product.image}"
          alt="${product.name}"
        />
      </a>
      </div>

      <div class="different_content">
        <h2>
        <a href="#" title="${product.name} "
          >${product.name}
        </a>
        </h2>


        <div class="different_price">
        <span>${product.price},000₫</span>
        </div>
      </div>
   </div>
      `;
  }
  // dom tới và đưa dữ liệu lên
  document.querySelector(".different_items").innerHTML = content;
}

function renderCareGiay(arr) {
  // console.log(arr);
  var content = "";
  // chạy vòng lặp duyệt qua dữ liệu
  for (var i = 0; i < arr.length; i++) {
    // log và kiểm tra cấu trúc object đang được đưa lên giao diện
    // console.log(arr[i]);
    var product = arr[i];
    content += `
      <div class="canCare_item">
      <div class="canCare_img">
        <a href="#">
          <img src="${product.image}" alt="${product.name}" />
        </a>
      </div>
      <div class="canCare_content">
        <h2>
          <a href="#" title="${product.name}">${product.name}</a>
        </h2>
        <div class="canCare_price">
          <span>${product.price},000đ</span>
        </div>
      </div>
    </div>
      `;
  }
  // dom tới và đưa dữ liệu lên
  document.querySelector(".canCare_items").innerHTML = content;
}
function renderGiayNew(arr) {
  // console.log(arr);
  var content = "";
  // chạy vòng lặp duyệt qua dữ liệu
  for (var i = 0; i < arr.length; i++) {
    // log và kiểm tra cấu trúc object đang được đưa lên giao diện
    // console.log(arr[i]);
    var product = arr[i];
    content += `
    <div class="ganCuoi_item">
    <div class="ganCuoi_img">
      <a href="#">
        <img src="${product.image}" alt="${product.name}" />
      </a>
    </div>
  </div>
      `;
  }
  // dom tới và đưa dữ liệu lên
  document.querySelector(".ganCuoi_items").innerHTML = content;
}

async function hienThiTatCaGiay() {
  try {
    //Nơi xử lí các đoạn code
    let promise = {
      url: `https://shop.cyberlearn.vn/api/Product`,
      method: "GET",
    };
    console.log(promise);
  } catch (error) {
    //Nơi xử lí lỗi khi xảy ra
    console.log(error);
  }
}

hienThiTatCaGiay();

const getProductsDetail = async (id) => {
  console.log("id", id);

  let promise = await axios({
    url: "https://shop.cyberlearn.vn/api/Product?id=${id}",
    method: "GET",
    responseType: "json",
  });
  return promise.data.content;
};
console.log(getProductsDetail(1));

async function hienThiChiTietGiay() {
  try {
    let url = new URLSearchParams(window.location.search);
    let id = url.get("id");
    console.log(id); // 1
    let resolve = await axios({
      url: `https://shop.cyberlearn.vn/api/Product?id=${id}`,
      method: "GET",
    });
    console.log(resolve);
    //mảng nhiều
  } catch (error) {
    console.log(error);
  }
  console.log(window.location.href); //http://127.0.0.1:5501/view/detail/detail.html?id=1
  let url2 = window.location.href;

  // window.location.href = "url2";

  // window.location.href = "https://www.google.com"; // cho người dùng chạy qua trang này
}
hienThiChiTietGiay();
