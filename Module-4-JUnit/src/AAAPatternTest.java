import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class AAAPatternTest {

    private int number;

    // Setup method - runs before each test
    @Before
    public void setUp() {
        number = 10;
        System.out.println("Setup: number initialized to " + number);
    }

    // Test using Arrange-Act-Assert (AAA) pattern
    @Test
    public void testAddition() {

        // Arrange
        int value = number;

        // Act
        int result = value + 5;

        // Assert
        assertEquals(15, result);
    }

    // Another test using AAA pattern
    @Test
    public void testMultiplication() {

        // Arrange
        int value = number;

        // Act
        int result = value * 2;

        // Assert
        assertEquals(20, result);
    }

    // Teardown method - runs after each test
    @After
    public void tearDown() {
        System.out.println("Teardown: Test completed.");
    }
}