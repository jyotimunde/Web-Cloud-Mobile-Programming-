package com.example.jyoti.login;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;



public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void checkCredentials (View v){
        EditText usernameCtrl = (EditText)findViewById(R.id.username);
        EditText passwordCtrl = (EditText)findViewById(R.id.password);
        TextView errorText = (TextView)findViewById(R.id.lbl_error);
        String username = usernameCtrl.getText().toString();
        String password = passwordCtrl.getText().toString();

        boolean validationFlag = false;
        if(!username.isEmpty() && !password.isEmpty()){
            if(username.equals("jyoti") && password.equals("jo")){
                validationFlag = true;
            }
        }
        if(!validationFlag){
            errorText.setVisibility(View.VISIBLE);
        }
        else
        {
            Intent myIntent = new Intent(this, Homepage.class);
            startActivity(myIntent);
        }
    }
}