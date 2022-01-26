import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.time.*;

class UserStay extends JFrame implements ActionListener{
    private JPanel panel;
    private JButton saveDate, changeDate, goBack, nextTrans, buttonTC;
    private JLabel header, endDate, departureDate;
    private JComboBox date, month, year, date1, month1, year1;
    private JTextArea tout;
    private String mos, dd, yyyy, mos1, dd1, yyyy1, stay, depart;

    private String dates[]
            = {"1", "2", "3", "4", "5",
            "6", "7", "8", "9", "10",
            "11", "12", "13", "14", "15",
            "16", "17", "18", "19", "20",
            "21", "22", "23", "24", "25",
            "26", "27", "28", "29", "30",
            "31"};
    private String months[]
            = {"Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"};
    private String years[]
            = {"2021", "2022", "2023", "2024"};

    public UserStay() {
        super("How long are you planning to stay?");
        this.setResizable(false);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLocationRelativeTo(null);

        panel = new JPanel();
        panel.setLayout(null);

        departureDate = new JLabel("Select dates of stay: ");
        departureDate.setFont(new Font("Arial", Font.PLAIN, 15));
        departureDate.setBounds(50, 20, 200, 30);
        panel.add(departureDate);

        //import a calendar?
        date = new JComboBox(dates);
        date.setFont(new Font("Arial", Font.PLAIN, 15));
        date.setSize(70, 20);
        date.setLocation(50, 50);
        panel.add(date);

        month = new JComboBox(months);
        month.setFont(new Font("Arial", Font.PLAIN, 15));
        month.setSize(95, 20);
        month.setLocation(120, 50);
        panel.add(month);
        mos = (String) month.getSelectedItem();

        year = new JComboBox(years);
        year.setFont(new Font("Arial", Font.PLAIN, 15));
        year.setSize(95, 20);
        year.setLocation(220, 50);
        panel.add(year);
        yyyy = (String) year.getSelectedItem();

        endDate = new JLabel("Choose End Date: ");
        endDate.setFont(new Font("Arial", Font.PLAIN, 15));
        endDate.setBounds(50, 120, 200, 30);
        panel.add(endDate);

        //import a calendar?
        date1 = new JComboBox(dates);
        date1.setFont(new Font("Arial", Font.PLAIN, 15));
        date1.setSize(70, 20);
        date1.setLocation(50, 150);
        panel.add(date1);

        month1 = new JComboBox(months);
        month1.setFont(new Font("Arial", Font.PLAIN, 15));
        month1.setSize(95, 20);
        month1.setLocation(120, 150);
        panel.add(month1);

        year1 = new JComboBox(years);
        year1.setFont(new Font("Arial", Font.PLAIN, 15));
        year1.setSize(95, 20);
        year1.setLocation(220, 150);
        panel.add(year1);

        ptout();
        saveD();
        changeDate();
        nextTrans();

        buttonTC = new JButton("View Travel Conditions");
        buttonTC.setFont(new Font("Arial", Font.PLAIN, 15));
        buttonTC.setBounds(200, 250, 200, 30);
        buttonTC.addActionListener(this);
        panel.add(buttonTC);

        goBack = new JButton("Return to Destination");
        goBack.setFont(new Font("Arial", Font.PLAIN, 15));
        goBack.setBounds(50, 350, 200, 30);
        goBack.addActionListener(this);
        panel.add(goBack);

        setVisible(true);
        setSize(800, 450);

        header = new JLabel();
        header.setOpaque(true);
        panel.add(header);

        this.add(panel);
    }

    public void ptout() {
        tout = new JTextArea();
        tout.setFont(new Font("Arial", Font.PLAIN, 15));
        tout.setSize(250, 200);
        tout.setLocation(400, 50);
        tout.setLineWrap(true);
        tout.setEditable(false);
        panel.add(tout);
    }

    public void saveD() {
        saveDate = new JButton("Save date");
        saveDate.setFont(new Font("Arial", Font.PLAIN, 15));
        saveDate.setBounds(100, 200, 100, 30);
        saveDate.addActionListener(this);
        panel.add(saveDate);
    }

    public void nextTrans() {
        nextTrans = new JButton("Next, choose your transportation...");
        nextTrans.setFont(new Font("Arial", Font.PLAIN, 15));
        nextTrans.setBounds(300, 350, 300, 30);
        nextTrans.addActionListener(this);
        panel.add(nextTrans);
    }

    private void changeDate() {
        changeDate = new JButton("Change dates");
        changeDate.setFont(new Font("Arial", Font.PLAIN, 15));
        changeDate.setBounds(200, 200, 120, 30);
        changeDate.addActionListener(this);
        panel.add(changeDate);
    }

    public void actionPerformed(ActionEvent e){

        if (e.getSource() == saveDate) {
            tout.setText("These are the dates \n" +
                    "that you will be staying \n" +
                    "at your destination:\n"
                    + "Depart: " + (String) date.getSelectedItem()
                    + "/" + (String) month.getSelectedItem()
                    + "/" + (String) year.getSelectedItem() + "\n"
                    + "Return: " + (String) date1.getSelectedItem()
                    + "/" + (String) month1.getSelectedItem()
                    + "/" + (String) year1.getSelectedItem() + "\n"
                    + "To continue, click Next...");
            tout.setEditable(false);

        } else if (e.getSource() == changeDate) {
            String def = "";
            tout.setText(def);
            date.setSelectedIndex(0);
            month.setSelectedIndex(0);
            year.setSelectedIndex(0);
            date1.setSelectedIndex(0);
            month1.setSelectedIndex(0);
            year1.setSelectedIndex(0);

        } else if (e.getSource() == buttonTC) {
                TravelConditions tC = new TravelConditions();
                tC.setVisible(true);
                dispose();

        } else if (e.getSource() == goBack) {
            UserDestination userD = new UserDestination();
            userD.setVisible(true);
            dispose();

        } else if (e.getSource() == nextTrans) {
            UserTransportation userT = new UserTransportation();
            userT.setVisible(true);
            dispose();
        }

    }

    public static void main(String[] args) {
        UserStay ac = new UserStay();

    }
}