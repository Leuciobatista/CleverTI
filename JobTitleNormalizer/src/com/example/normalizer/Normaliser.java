package com.example.normalizer;

import java.util.HashMap;
import java.util.Map;

public class Normaliser {

    private Map<String, String> normalizedTitles;

    public Normaliser() {
        normalizedTitles = new HashMap<>();
        normalizedTitles.put("Architect", "Architect");
        normalizedTitles.put("Software engineer", "Software engineer");
        normalizedTitles.put("Quantity surveyor", "Quantity surveyor");
        normalizedTitles.put("Accountant", "Accountant");
    }

    public String normalise(String jobTitle) {
        String normalizedTitle = "";
        double highestScore = 0.0;

        for (String key : normalizedTitles.keySet()) {
            double score = calculateQualityScore(jobTitle, key);
            if (score > highestScore) {
                highestScore = score;
                normalizedTitle = normalizedTitles.get(key);
            }
        }

        return normalizedTitle;
    }

    private double calculateQualityScore(String input, String target) {
        input = input.toLowerCase();
        target = target.toLowerCase();

        String[] inputWords = input.split(" ");
        String[] targetWords = target.split(" ");
        int matchCount = 0;

        for (String inputWord : inputWords) {
            for (String targetWord : targetWords) {
                if (inputWord.equals(targetWord)) {
                    matchCount++;
                }
            }
        }

        return (double) matchCount / targetWords.length;
    }

    public static void main(String[] args) {
        Normaliser n = new Normaliser();

        System.out.println(n.normalise("Java engineer")); // Should print "Software engineer"
        System.out.println(n.normalise("C# engineer")); // Should print "Software engineer"
        System.out.println(n.normalise("Accountant")); // Should print "Accountant"
        System.out.println(n.normalise("Chief Accountant")); // Should print "Accountant"
    }
}
