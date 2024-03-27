document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    const totalPrice = document.getElementById("total-price");
  
    items.forEach(function(item) {
      const quantityInput = item.querySelector("input");
      const price = parseFloat(item.querySelector(".price").innerText.slice(1));
  
      // Increase quantity
      item.querySelector(".plus-btn").addEventListener("click", function() {
        quantityInput.value++;
        updateTotal();
      });
  
      // Decrease quantity
      item.querySelector(".minus-btn").addEventListener("click", function() {
        if (quantityInput.value > 1) {
          quantityInput.value--;
          updateTotal();
        }
      });
  
      // Delete item
      item.querySelector(".delete-btn").addEventListener("click", function() {
        item.remove();
        updateTotal();
      });
  
      // Like item
      item.querySelector(".like-btn").addEventListener("click", function() {
        item.querySelector(".like-btn").classList.toggle("liked");
      });
  
      function updateTotal() {
        let total = 0;
        items.forEach(function(item) {
          const quantity = parseInt(item.querySelector("input").value);
          const itemPrice = parseFloat(item.querySelector(".price").innerText.slice(1));
          total += quantity * itemPrice;
        });
        totalPrice.innerText = "$" + total.toFixed(2);
      }
    });
  });
  