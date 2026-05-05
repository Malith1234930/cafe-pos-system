const STORAGE_KEYS = {
  auth: "pos_auth",
  customers: "pos_customers",
  items: "pos_items",
  orders: "pos_orders"
};

const DEMO_USER = {
  username: "admin",
  password: "1234"
};

let state = {
  customers: [],
  items: [],
  orders: [],
  cart: []
};

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function formatCurrency(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

function generateId(prefix) {
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
}

function escapeHtml(value) {
  return $("<div>").text(value ?? "").html();
}
