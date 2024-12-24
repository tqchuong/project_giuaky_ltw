package fit.hcmuaf.edu.vn.foodmart.Cart;

import fit.hcmuaf.edu.vn.foodmart.model.Products;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Cart
{
    Map<Integer, CartProduct> data = new HashMap<>();

    public boolean add(Products p) {
        if (data.containsKey(p.getID())) {
            update(p.getID(), data.get(p.getID()).getQuantity() + 1);
            return true;
        } else {
            data.put(p.getID(), convert(p));
            return true;
        }
    }
    public boolean update(int id, int quantity) {

            if (!data.containsKey(id) || quantity < 1) return false;

            CartProduct cartProduct = data.get(id);
            cartProduct.setQuantity(quantity);
            data.put(id, cartProduct);
            return true;
        }

    public boolean remove(int id) {
        if (!data.containsKey(id)) return false;

        data.remove(id);
        return true;
    }
    public List<CartProduct> getlist() {
        return new ArrayList<>(data.values());
    }
    private CartProduct convert(Products p) {
        CartProduct re = new CartProduct();
        re.setId(p.getID());
        re.setProductName(p.getProductName());
        re.setPrice(p.getPrice());
        re.setImageURL(p.getImageURL());
        re.setQuantity(1);
        return re;
    }

}
