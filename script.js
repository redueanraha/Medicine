function orderNow(productName, price) {
  const phoneNumber = "8801307249542"; // ← এখানে তোমার WhatsApp নাম্বার বসাও (৮৮০ দিয়ে শুরু)
  const message = `আমি "${productName}" নিতে চাই, দাম ৳${price}। দয়া করে ডেলিভারি করুন।`;
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
}
