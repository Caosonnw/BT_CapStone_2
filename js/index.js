async function getProductData(apiUrl) {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

function displayProductInfo(products) {
  const productContainer = document.getElementById('product-container');

  if (!products) {
    productContainer.innerHTML = '<p>Không thể lấy dữ liệu từ API.</p>';
    return;
  }

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-item');

    const productName = document.createElement('h2');
    productName.textContent = product.name;

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: ${product.price},000đ`;

    const viewDetailsButton = document.createElement('button');
    viewDetailsButton.textContent = 'Xem chi tiết sản phẩm';
    viewDetailsButton.addEventListener('click', () => {
      // Chuyển hướng đến trang detail.html với query parameter 'id'
      window.location.href = `http://127.0.0.1:5500/view/detail/detail.html?id=${product.id}`;
    });

    productDiv.appendChild(productName);
    productDiv.appendChild(productImage);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(viewDetailsButton);

    productContainer.appendChild(productDiv);
  });
}

const apiUrl = 'https://shop.cyberlearn.vn/api/Product';

async function displayProducts() {
  const products = await getProductData(apiUrl);
  displayProductInfo(products);
}

// Gọi hàm để hiển thị sản phẩm khi trang được tải
displayProducts();
