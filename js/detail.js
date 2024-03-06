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

async function hienThiChiTietGiay(productId) {
  try {
    const apiUrl = `https://shop.cyberlearn.vn/api/Product/getbyid?id=${productId}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    const breadcrumbItem = document.querySelector(".breadcrumb-item.active");
    breadcrumbItem.textContent = data.content.name;

    document.querySelector(".product_title").textContent = data.content.name;
    document.querySelector(".product_price").textContent = "Price: " +
      data.content.price + ",000đ";

    const productImg = document.getElementById("productImage");
    productImg.src = data.content.image;
    productImg.alt = data.content.name;

    const sizeContainer = document.querySelector(".product_size");
    sizeContainer.innerHTML = "";

    data.content.size.forEach((size) => {
      const label = document.createElement("label");
      label.setAttribute("for", `size-${size}`);

      const input = document.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("name", "size");
      input.setAttribute("id", `size-${size}`);
      input.setAttribute("value", size);

      const span = document.createElement("span");
      span.textContent = size;

      label.appendChild(input);
      label.appendChild(span);

      sizeContainer.appendChild(label);
    });

    const carouselItems = document.querySelectorAll(
      ".carousel-inner .carousel-item img"
    );
    carouselItems.forEach((item, index) => {
      item.src = data.content.image;
      item.alt = `Giày Trắng ${index + 1}`;
    });

    const carouselIndicators = document.querySelectorAll(
      ".carousel-indicators button img"
    );
    carouselIndicators.forEach((indicator, index) => {
      indicator.src = data.content.image;
      indicator.alt = `Giày Trắng ${index + 1}`;
    });
  } catch (error) {
    console.error(error);
  }
}

// Lấy id từ query parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Gọi hàm hiển thị chi tiết giày với id từ query parameter
hienThiChiTietGiay(productId);


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
  $(".your-class").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
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
    $(".CLEAR-class").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
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
  $(document).ready(function () {
    $(".ganCuoi-class").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  });
}

getAllGiay()

