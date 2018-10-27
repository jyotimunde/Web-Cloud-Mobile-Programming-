package com.example.vijaya.myorder;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.content.Intent;

public class summary extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_summary);
    }
    public void sendSummary(android.view.View v){
        Intent intent = new Intent(Intent.ACTION_SEND);
        intent.setType("plain/text");
        intent.putExtra(Intent.EXTRA_EMAIL, new String[] { "jo@gmail.com" });
        intent.putExtra(Intent.EXTRA_SUBJECT, "Order Summary list is-");
        intent.putExtra(Intent.EXTRA_TEXT, " Name: Jyoti\n Your Toppings are- \nChicken\n Bacon\n Total:$20.00\n Thanks for ordering ");
        startActivity(Intent.createChooser(intent, ""));
    }

}
