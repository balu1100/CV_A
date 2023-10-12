import java.util.HashMap;
import java.util.Scanner;
class Program2{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String romanStr = sc.nextLine();
        System.out.println(romanToInteger(romanStr));
    }
    public static int romanToInteger(String roman){
        
        HashMap<Character, Integer> romanValuesMap = new HashMap<>();
        romanValuesMap.put('I', 1);
        romanValuesMap.put('V', 5);
        romanValuesMap.put('X', 10);
        romanValuesMap.put('L', 50);
        romanValuesMap.put('C', 100);
        romanValuesMap.put('D', 500);
        romanValuesMap.put('M', 1000);
    
        int total = 0;
        int prev = 0;
        for(int i=roman.length()-1; i>=0; i--){
            char currentChar = roman.charAt(i);
            int currentValue = romanValuesMap.get(currentChar);
            if(currentValue < prev){
                total -= currentValue;
            }else{total += currentValue;}
            if (i < roman.length() - 1) {
                char nextChar = roman.charAt(i + 1);
                if (romanValuesMap.get(nextChar) >= currentValue) {
                    total-=currentValue;
                }}
            prev = currentValue;//Keeping track of the previous element
        }
        return total;
    }
}