public class LinearSearch {

    public static Product search(Product[] products, String name) {

        for (int i = 0; i < products.length; i++) {

            if (products[i].productName.equalsIgnoreCase(name)) {
                return products[i];
            }

        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Watch", "Accessories"),
                new Product(104, "Mobile", "Electronics"),
                new Product(105, "Headphones", "Electronics")
        };

        Product result = search(products, "Watch");

        if (result != null) {
            System.out.println("Product Found");
            System.out.println("Product ID : " + result.productId);
            System.out.println("Product Name : " + result.productName);
            System.out.println("Category : " + result.category);
        } else {
            System.out.println("Product Not Found");
        }

    }
}