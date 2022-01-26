//package login.frames;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class LoginFrame extends JFrame implements ActionListener {

    JLabel userNameLabel, passwordLabel;
    JTextField userNameTextField;
    JPasswordField passwordField;
    JButton loginButton;
    Container container;

    public LoginFrame() {
        userNameLabel = new JLabel("User Name");
        userNameTextField = new JTextField();
        passwordLabel = new JLabel("Password");
        passwordField = new JPasswordField();
        loginButton = new JButton("Login");
        container = getContentPane();
        container.setLayout(null);
        setBounds();
        addComponents();
        addActionListener();
        this.setTitle("Login Form");
        this.setVisible(true);
        this.setBounds(250, 250, 370, 300);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setResizable(false);

    }

    public void setBounds() {
        userNameLabel.setBounds(10, 10, 100, 30);
        userNameTextField.setBounds(100, 10, 200, 30);
        passwordLabel.setBounds(10, 50, 100, 30);
        passwordField.setBounds(100, 50, 200, 30);
        loginButton.setBounds(100, 100, 200, 30);
    }

    public void addComponents() {
        container.add(userNameLabel);
        container.add(userNameTextField);
        container.add(passwordLabel);
        container.add(passwordField);
        container.add(loginButton);
    }

    public void addActionListener() {
        loginButton.addActionListener(this);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        System.out.println("Event called");
        if (e.getSource() == loginButton) {
            String userName = userNameTextField.getText();
            /*never print password or other sensitive data in console
              this is only for testing purpose*/
            String password = passwordField.getText();
            System.out.println(userName + " " + password);

            Validation v = new Validation();
            java.util.List<String> errors = v.validateLogin(userName, password);
            if (errors.size() > 0) {
                JOptionPane.showMessageDialog(null, errors.toArray());
                return;
            }
            //check password provided by user with stored password in database
            if (userName.equalsIgnoreCase("Test") && password.equalsIgnoreCase("1234@.")) {
                System.out.println("Logged in");
                LoginHome loginHome = new LoginHome();
                loginHome.setVisible(true);
                dispose();

            } else {
                System.out.println("No User on File. Please Register");

            }
        }
    }

    public static void main(String[] args) {
        LoginFrame frame = new LoginFrame();
        
    }

}