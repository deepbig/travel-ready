
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class LoginHome extends JFrame implements ActionListener {

    JLabel message;
    JPanel panel;
    JButton toStay;


    public LoginHome() {
        this.setResizable(false);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLocationRelativeTo(null);
        this.setBounds(250, 250, 370, 300);

        panel = new JPanel();
        panel.setLayout(null);

        message = new JLabel("You are successfully logged in!");
        message.setFont(new Font("Arial", Font.PLAIN, 15));
        message.setBounds(10, 10, 400, 30);
        panel.add(message);

        this.add(panel);
            toStay = new JButton("Continue to Travel Destination");
            toStay.setBounds(50, 100, 250, 30);
            toStay.addActionListener(this);
            panel.add(toStay);
        }
        public void actionPerformed(ActionEvent e){
            System.out.println("Event called");
            if (e.getSource() == toStay) {
                UserDestination userD = new UserDestination();
                userD.setVisible(true);
                dispose();
            }
        }


        public static void main (String[]args){
            LoginHome frame = new LoginHome();

        }
    }



//    LoginDB db = new LoginDB();
//    User user = db.checkLogin(userName);
//    //Check where student exists in database or not
//            System.out.println(user);
//    //If Student object is not availabe in database the id=0
//            if (user.getUserName() == 0) {
//        System.out.println("No user found with username");
//        return;
//    }
//    //check password provided by user with stored password in database
//            if (BCrypt.checkpw(password, student.getPassword())) {
//        System.out.println("Logged in");
//        new HomeFrame().setVisible(true);
//        this.dispose();
//    } else {
//        System.out.println("Unable to login");
//        JOptionPane.showMessageDialog(null, "User id or password is incorrect");
//        return;
//    }

