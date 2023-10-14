class PangramCheck{
    public static void main(String[] args) {
        String s = "The quick brown fox jumps over the lazy dog";
        if(isPangram(s)){
            System.out.println("A valid Pangram");
        }else{
            System.out.println("Not a Pangram");
            }
        }
        
public static boolean isPangram(String str){
    str = str.toLowerCase().replaceAll("\\s", "");
    if(str.length() < 26){
        return false;
    }
    int[] store = new int[26];
    for(int i = 0; i < str.length(); i++) {
        char c = str.charAt(i);
        int idx = c - 'a';
        store[idx]++;
    }
    for(int i: store){
        if(i == 0){
            return false;
            }
        }
    return true;
    }
}