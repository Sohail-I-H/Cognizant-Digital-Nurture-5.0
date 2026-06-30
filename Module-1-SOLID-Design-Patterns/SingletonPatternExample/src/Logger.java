public class Logger {

    // Create a single instance of the Logger class
    private static Logger instance = new Logger();

    // Private constructor prevents object creation from outside
    private Logger() {
        System.out.println("Logger Instance Created");
    }

    // Returns the single Logger instance
    public static Logger getInstance() {
        return instance;
    }

    // Method to display log messages
    public void log(String message) {
        System.out.println("LOG: " + message);
    }
}