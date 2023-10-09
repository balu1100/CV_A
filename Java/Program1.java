import java.util.Arrays;
import java.util.Random;//for shuffling;
class Program1{
    public static void main(String[] args){
        int array[] = {1, 2, 3, 4, 5, 6, 7};
        Random random = new Random();
        for(int i = 1; i<array.length; i++){
            int j = random.nextInt(i+1);
            int tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }

        for(int n: array){
            System.out.print(n+" ");
        }
    }
}