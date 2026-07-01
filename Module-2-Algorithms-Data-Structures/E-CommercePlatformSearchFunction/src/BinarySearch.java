public class BinarySearch {

    public static Product search(Product[] products, String name) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int value = products[mid].productName.compareToIgnoreCase(name);

            if (value == 0) {
                return products[mid];
            }

            if (value < 0) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }

        }

        return null;
    }

    public static void main(String[] args) {

        // Products should be sorted by product name
        Product[] products = {
                new Product(105, "Camera", "Electronics"),
                new Product(101, "Headphones", "Electronics"),
                new Product(102, "Laptop", "Electronics"),
                new Product(104, "Mobile", "Electronics"),
                new Product(103, "Watch", "Accessories")
        };

        Product result = search(products, "Mobile");

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