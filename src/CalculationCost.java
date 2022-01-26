
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class CalculationCost extends JFrame implements ActionListener{
    private JPanel panel;
    private JLabel header;
    private JButton calculate, back, next, change;
    private JLabel days, gas;
    private JLabel airfare;
    private JLabel rentalcar;
    private JLabel privatecar;
    private JLabel foodBudget;
    private JLabel activities;
    private JLabel lodgingcharges;
    private JTextField days1, gas1;
    private JTextField airfare1;
    private JTextField rentalcar1;
    private JTextField privatecar1;
    private JTextField foodBudget1;
    private JTextField activities1;
    private JTextField lodgingcharges1;
    private JTextArea tout;
    private Double miles, gas2;


    public CalculationCost() {
        super("Travel Expenses Calculator");
        this.setSize(800, 450);
        this.setResizable(false);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLocationRelativeTo(null);
        panel = new JPanel();
        panel.setLayout(null);
        this.setVisible(true);

        header = new JLabel();
        header.setOpaque(true);
        panel.add(header);

        //FlowLayout layout = new FlowLayout();

        // Creating Object P2 of JPanel class
        //JPanel p2 = new JPanel();

        // set the layout
        //p2.setLayout(layout);

        this.add(panel);
        //this.add(p2);

//        days = new JLabel("How many days are you staying?");
//        days.setBounds(50, 20, 200, 30);
//        days1 = new JTextField();
//        days1.setBounds(100, 20, 10, 30);

//        airfare = new JLabel("If flying, how much is airfare?");
//        airfare.setBounds(50, 50, 200, 30);
//        airfare1 = new JTextField();
//        airfare.setBounds(100, 50, 10, 30);

        privatecar = new JLabel("How far are you traveling in miles?");
        privatecar1 = new JTextField();
        privatecar.setBounds(50, 50, 300, 30);
        privatecar1.setBounds(50, 100, 50, 30);
        panel.add(privatecar);
        panel.add(privatecar1);

        gas = new JLabel("What is the average gas cost?");
        gas.setBounds(50, 150, 200, 30);
        gas1 = new JTextField();
        gas1.setBounds(50, 200, 50,30);
        panel.add(gas);
        panel.add(gas1);

//        foodBudget = new JLabel("How much will spend on food?");
//        foodBudget1 = new JTextField(10);
//        foodBudget.setBounds(100, 150, 10, 30);
//
//        activities = new JLabel("How much will you spend on activities?");
//        activities1 = new JTextField(10);
//        activities.setBounds(100, 50, 10, 30);
//
//        lodgingcharges = new JLabel("What is the cost of lodging?");
//        lodgingcharges1 = new JTextField(10);
//        lodgingcharges.setBounds(100, 50, 10, 30);

        calculate = new JButton("Calculate cost");
        calculate.setBounds(50, 250, 120, 30);
        calculate.addActionListener(this);

        back = new JButton("Return to Transportation");
        //back.setFont(new Font("Arial", Font.PLAIN, 15));
        back.setBounds(50, 350, 200, 30);
        back.addActionListener(this);
        panel.add(back);

        next = new JButton("Next, choose lodging...");
        //back.setFont(new Font("Arial", Font.PLAIN, 15));
        next.setBounds(300, 350, 220, 30);
        next.addActionListener(this);
        panel.add(next);

        tout = new JTextArea();
        tout.setFont(new Font("Arial", Font.PLAIN, 15));
        tout.setSize(300, 200);
        tout.setLocation(300, 50);
        tout.setLineWrap(true);
        tout.setEditable(false);
        panel.add(tout);

        change = new JButton("Erase");
        change.setBounds(50, 300, 120, 30);
        change.addActionListener(this);
        panel.add(change);

//        panel.add(days);
//        panel.add(days1);
//        panel.add(airfare);
//        panel.add(airfare1);
//        panel.add(rentalcar);
//        panel.add(rentalcar1);
//        panel.add(privatecar);
//        panel.add(privatecar1);
//        panel.add(foodBudget);
//        panel.add(foodBudget1);
//        panel.add(activities);
//        panel.add(activities1);
//        panel.add(lodgingcharges);
//        panel.add(lodgingcharges1);
        panel.add(calculate);

    }
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == calculate) {
            int day;
            double flight;
            double food;
            double act;
            double hotel;
//                                         double total;
            //double adjusted;
//                                         double newtotal;
//                                         double moneysaved;
//                                         double moneyowed;

//            day = Integer.parseInt(days1.getText());
//            flight = Double.parseDouble(airfare1.getText());
            miles = Double.parseDouble(privatecar1.getText());
            gas2 = Double.parseDouble(gas1.getText());
//            food = Double.parseDouble(foodBudget1.getText());
//            act = Double.parseDouble(activities1.getText());
//            hotel = Double.parseDouble(lodgingcharges1.getText());


            double total = miles*gas2;
            //adjusted = day*MEALS + day*PARKING + day*TAXI + day*LODGING + owncar*OWNCAR;
            //newtotal = total - adjusted;
//                                         if(total > newtotal)
//                                             moneyowed = total - newtotal;
//                                         if(total < newtotal)
//                                             moneysaved =
            tout.setText("Total car expenses:\n"
                    + total);
            tout.setEditable(false);
        }
        else if(e.getSource() == back){
            UserTransportation ut = new UserTransportation();
            ut.setVisible(true);
            dispose();
        }
        else if(e.getSource() == next){
            UserLodging ul = new UserLodging();
            ul.setVisible(true);
            dispose();
        }
        else if(e.getSource() == change) {
            String def = "";
            tout.setText(def);
            gas1.setText(def);
            privatecar1.setText(def);
        }
    }
    public static void main(String[] args) {
        CalculationCost ac = new CalculationCost();

    }
}