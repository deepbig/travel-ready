import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

class MyFrame
        extends JFrame
        implements ActionListener {

    // Components of the Form
    private Container c;
    private JLabel title;
    private JLabel name, password, username, email;
    private JTextField tname, passwordTF, usernameTF, emailTF;
    private JLabel mno;
    private JTextField tmno;
    private JLabel dob;
    private JComboBox date;
    private JComboBox month;
    private JComboBox year;
    private JLabel add;
    private JTextArea tadd;
    private JCheckBox term;
    private JButton sub;
    private JButton reset, next;
    private JTextArea tout;
    private JLabel res;
    private JTextArea resadd;

    private String dates[]
            = { "1", "2", "3", "4", "5",
            "6", "7", "8", "9", "10",
            "11", "12", "13", "14", "15",
            "16", "17", "18", "19", "20",
            "21", "22", "23", "24", "25",
            "26", "27", "28", "29", "30",
            "31" };
    private String months[]
            = { "Jan", "feb", "Mar", "Apr",
            "May", "Jun", "July", "Aug",
            "Sup", "Oct", "Nov", "Dec" };
    private String years[]
            = {"1970", "1971", "1972", "1973",
            "1974", "1975", "1976", "1977", "1978",
            "1979","1980", "1981", "1982", "1983",
            "1984", "1985", "1986", "1987", "1988",
            "1989", "1990", "1991", "1992", "1993",
            "1994", "1995", "1996", "1997", "1998",
            "1999", "2000", "2001", "2002",
            "2003", "2004", "2005", "2006",
            "2007", "2008", "2009", "2010",
            "2011", "2012", "2013", "2014",
            "2015", "2016", "2017", "2018",
            "2019" };


    // constructor, to initialize the components
    // with default values.
    public MyFrame()
    {
        setTitle("Registration");
        setBounds(350, 90, 900, 600);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setResizable(false);

        c = getContentPane();
        c.setLayout(null);

        title = new JLabel("Registration");
        title.setFont(new Font("Arial", Font.PLAIN, 30));
        title.setSize(300, 30);
        title.setLocation(300, 30);
        c.add(title);

        name = new JLabel("Name");
        name.setFont(new Font("Arial", Font.PLAIN, 20));
        name.setSize(100, 20);
        name.setLocation(100, 100);
        c.add(name);

        tname = new JTextField();
        tname.setFont(new Font("Arial", Font.PLAIN, 15));
        tname.setSize(190, 20);
        tname.setLocation(200, 100);
        c.add(tname);

        mno = new JLabel("Phone");
        mno.setFont(new Font("Arial", Font.PLAIN, 20));
        mno.setSize(100, 20);
        mno.setLocation(100, 150);
        c.add(mno);

        tmno = new JTextField();
        tmno.setFont(new Font("Arial", Font.PLAIN, 15));
        tmno.setSize(150, 20);
        tmno.setLocation(200, 150);
        c.add(tmno);

        dob = new JLabel("Date of Birth");
        dob.setFont(new Font("Arial", Font.PLAIN, 20));
        dob.setSize(150, 20);
        dob.setLocation(100, 200);
        c.add(dob);

        date = new JComboBox(dates);
        date.setFont(new Font("Arial", Font.PLAIN, 15));
        date.setSize(60, 20);
        date.setLocation(220, 200);
        c.add(date);

        month = new JComboBox(months);
        month.setFont(new Font("Arial", Font.PLAIN, 15));
        month.setSize(95, 20);
        month.setLocation(280, 200);
        c.add(month);

        year = new JComboBox(years);
        year.setFont(new Font("Arial", Font.PLAIN, 15));
        year.setSize(95, 20);
        year.setLocation(370, 200);
        c.add(year);

        add = new JLabel("Address");
        add.setFont(new Font("Arial", Font.PLAIN, 20));
        add.setSize(100, 20);
        add.setLocation(100, 250);
        c.add(add);

        tadd = new JTextArea();
        tadd.setFont(new Font("Arial", Font.PLAIN, 15));
        tadd.setSize(200, 60);
        tadd.setLocation(200, 250);
        tadd.setLineWrap(true);
        c.add(tadd);

        username = new JLabel("UserName");
        username.setFont(new Font("Arial", Font.PLAIN, 20));
        username.setBounds(100, 320, 100, 30);
        c.add(username);

        usernameTF = new JTextField();
        usernameTF.setFont(new Font("Arial", Font.PLAIN, 15));
        usernameTF.setBounds(200, 320, 100, 30);
        c.add(usernameTF);

        email = new JLabel("Email");
        email.setFont(new Font("Arial", Font.PLAIN, 20));
        email.setBounds(100, 370, 100, 30);
        c.add(email);

        emailTF = new JTextField();
        emailTF.setFont(new Font("Arial", Font.PLAIN, 15));
        emailTF.setBounds(200, 370, 100, 30);
        c.add(emailTF);

        password = new JLabel("Password");
        password.setFont(new Font("Arial", Font.PLAIN, 20));
        password.setBounds(100, 400, 100, 30);
        c.add(password);

        passwordTF = new JPasswordField();
        passwordTF.setFont(new Font("Arial", Font.PLAIN, 15));
        passwordTF.setBounds(200, 400, 100, 30);
        c.add(passwordTF);

        term = new JCheckBox("Accept Terms And Conditions.");
        term.setFont(new Font("Arial", Font.PLAIN, 12));
        term.setSize(250, 15);
        term.setLocation(150, 450);
        c.add(term);

        sub = new JButton("Submit");
        sub.setFont(new Font("Arial", Font.PLAIN, 15));
        sub.setSize(100, 20);
        sub.setLocation(150, 480);
        sub.addActionListener(this);
        c.add(sub);

        reset = new JButton("Reset");
        reset.setFont(new Font("Arial", Font.PLAIN, 15));
        reset.setSize(100, 20);
        reset.setLocation(270, 480);
        reset.addActionListener(this);
        c.add(reset);

        tout = new JTextArea();
        tout.setFont(new Font("Arial", Font.PLAIN, 15));
        tout.setSize(300, 300);
        tout.setLocation(500, 100);
        tout.setLineWrap(true);
        tout.setEditable(false);
        c.add(tout);

        res = new JLabel("Please accept our terms and conditions.");
        res.setFont(new Font("Arial", Font.PLAIN, 20));
        res.setSize(500, 25);
        res.setLocation(100, 520);
        c.add(res);

        next = new JButton("Login");
        next.setFont(new Font("Arial", Font.PLAIN, 15));
        next.setSize(100, 30);
        next.setLocation(550, 520);
        next.addActionListener(this);
        c.add(next);

        resadd = new JTextArea();
        resadd.setFont(new Font("Arial", Font.PLAIN, 15));
        resadd.setSize(200, 75);
        resadd.setLocation(580, 175);
        resadd.setLineWrap(true);
        c.add(resadd);

        setVisible(true);
    }

    // method actionPerformed()
    // to get the action performed
    // by the user and act accordingly
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == sub) {
            if (term.isSelected()) {
                User newUser = new User();
                newUser.setUserName(tname.getText());
                newUser.setPassword(passwordTF.getText());
                String data
                        = "Verify the following:\n"
                        + "Name: "
                        + tname.getText() + "\n"
                        + "Phone: "
                        + tmno.getText() + "\n";
                String data1
                        = "Date of Birth: "
                        + (String) date.getSelectedItem()
                        + "/" + (String) month.getSelectedItem()
                        + "/" + (String) year.getSelectedItem()
                        + "\n";
                String data2
                        = "UserName: "
                        + usernameTF.getText() + "\n"
                        + "Email: "
                        + emailTF.getText() + "\n";

                String data3 = "Address: " + tadd.getText();

                tout.setText(data + data1 + data3 + data2);
                tout.setEditable(false);
                res.setText("Thank you for registering.");
            } else {
                tout.setText("");
                resadd.setText("");
                res.setText("Please accept the"
                        + " terms & conditions.");
            }
        }

        else if (e.getSource() == reset) {
            String def = "";
            tname.setText(def);
            tadd.setText(def);
            tmno.setText(def);
            res.setText(def);
            usernameTF.setText(def);
            emailTF.setText(def);
            passwordTF.setText(def);
            tout.setText(def);
            term.setSelected(false);
            date.setSelectedIndex(0);
            month.setSelectedIndex(0);
            year.setSelectedIndex(0);
            resadd.setText(def);
        }
        else if(e.getSource() == next) {
            LoginFrame lf = new LoginFrame();
            lf.setVisible(true);
            dispose();
    }
    }
}

// Driver Code
class Registration {

    public static void main(String[] args) throws Exception
    {
        MyFrame f = new MyFrame();
    }

}