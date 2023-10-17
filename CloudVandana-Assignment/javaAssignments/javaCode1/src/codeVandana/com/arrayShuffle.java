package codeVandana.com;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class arrayShuffle {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(1);  //add elem into list
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);
        list.add(7);

        Collections.shuffle(list); //shuffle is method of collections class

        for (int num : list) {
            System.out.print(num + " "); //print list elements
        }
    }
}