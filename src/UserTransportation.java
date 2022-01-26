import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.*;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

public class UserTransportation extends JFrame {
    private JPanel panel;
    private JButton buttonByLand, buttonByAir, nextButton;
    private JLabel header, travelLabel;

    public UserTransportation() {
        super("How will you get there?");
        this.setResizable(false);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLocationRelativeTo(null);

        panel = new JPanel();
        panel.setLayout(null);

        setVisible(true);
        setSize(800, 450);

        header = new JLabel();
        header.setOpaque(true);
        panel.add(header);

        this.add(panel);

        User user = new User();
//        travelLabel = new JLabel("You are traveling to:\n" + user.getDestination());
//        travelLabel.setBounds(100, 50, 300, 30);
//        panel.add(travelLabel);
//
//        travelLabel = new JLabel("We have a couple of options...");
//        travelLabel.setBounds(50, 50, 300, 30);
//        panel.add(travelLabel);

        travelLabel = new JLabel("By car?");
        travelLabel.setBounds(100, 200, 200, 30);
        panel.add(travelLabel);

        buttonByLand = new JButton("Calculate mileage cost");
        buttonByLand.setBounds(100, 250, 200, 30);
        buttonByLand.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                CalculationCost mileage = new CalculationCost();
                mileage.setVisible(true);
                dispose();
            }
        });
        panel.add(buttonByLand);

        travelLabel = new JLabel("By plane?");
        travelLabel.setBounds(100, 50, 200, 30);
        panel.add(travelLabel);

        buttonByAir = new JButton("Click here to see Flight Prices");
        buttonByAir.setBounds(100, 100, 250, 30);
        buttonByAir.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if (e.getSource() == buttonByAir) {
                    try {
                        Desktop.getDesktop().browse(new URI("https://www.google.com/travel/flights"));
                    } catch (IOException | URISyntaxException e1) {
                        e1.printStackTrace();
                    }

                }
            }
        });
        panel.add(buttonByAir);

        nextButton = new JButton("Next, choose lodging...");
        nextButton.setBounds(400, 200, 250, 30);
        nextButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                UserLodging ul = new UserLodging();
                ul.setVisible(true);
                dispose();
            }

        });
        panel.add(nextButton);

    }

    public static void main(String[] args) {
        UserTransportation ac = new UserTransportation();

    }
}
