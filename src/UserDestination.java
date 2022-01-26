import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.*;
import java.net.*;

public class UserDestination extends JFrame implements ActionListener{
    private JPanel panel;
    private JButton buttonNext, buttonTC, saveD, goBack;
    private JLabel header, destinationLabel, cityLabel, stateLabel, countryLabel;
    private String d, cit, stat, coun;
    private JTextArea tout;
    static JTextField destinationTF, city, state, country;

    public UserDestination() {
        super("Choose your destination");
        this.setResizable(false);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLocationRelativeTo(null);

        panel = new JPanel();
        panel.setLayout(null);

        //implement method to set/get destination
        User user = new User();

        destinationLabel = new JLabel("Where would you like to go? ");
        destinationLabel.setBounds(100, 50, 200, 30);
        panel.add(destinationLabel);

        destination();

       /* cityLabel = new JLabel("Enter a city: ");
        cityLabel.setSize(100, 20);
        cityLabel.setLocation(100,100);
        panel.add(cityLabel);

        city = new JTextField();
        city.setSize(190, 20);
        city.setLocation(200,100);
        panel.add(city);

        stateLabel = new JLabel("Enter a state: ");
        stateLabel.setSize(100, 20);
        stateLabel.setLocation(100,150);
        panel.add(stateLabel);

        state = new JTextField();
        state.setSize(150, 20);
        state.setLocation(200,150);
        panel.add(state);

        countryLabel = new JLabel("Enter a country: ");
        countryLabel.setSize(150, 20);
        countryLabel.setLocation(100,200);
        panel.add(countryLabel);

        country = new JTextField();
        country.setSize(200,20);
        country.setLocation(200,200);
        panel.add(country);*/

        tout = new JTextArea();
        tout.setFont(new Font("Arial", Font.PLAIN, 15));
        tout.setSize(300, 200);
        tout.setLocation(500, 50);
        tout.setLineWrap(true);
        tout.setEditable(false);
        panel.add(tout);


        /*JFrame test = new JFrame("Google Maps");

        try {
            String imageUrl = "https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=11&size=612x612&scale=2&maptype=roadmap";
            String destinationFile = "image.jpg";
            String str = destinationFile;
            URL url = new URL(imageUrl);
            InputStream is = url.openStream();
            OutputStream os = new FileOutputStream(destinationFile);

            byte[] b = new byte[2048];
            int length;

            while ((length = is.read(b)) != -1) {
                os.write(b, 0, length);
            }

            is.close();
            os.close();
        } catch (IOException e) {
            e.printStackTrace();
            System.exit(1);
        }

        test.add(new JLabel(new ImageIcon((new ImageIcon("image.jpg")).getImage().getScaledInstance(630, 600,
                java.awt.Image.SCALE_SMOOTH))));

        test.setVisible(true);
        test.pack();*/

        saveD = new JButton("Save Destination");
        saveD.setFont(new Font("Arial", Font.PLAIN, 15));
        saveD.setBounds(100, 150, 150, 30);
        saveD.addActionListener(this);
        panel.add(saveD);

        buttonNext = new JButton("Next choose your dates of stay...");
        buttonNext.setFont(new Font("Arial", Font.PLAIN, 15));
        buttonNext.setBounds(300, 350, 300, 30);
        buttonNext.addActionListener(this);
        panel.add(buttonNext);

//        goBack = new JButton("Go back to Stay");
//        goBack.setFont(new Font("Arial", Font.PLAIN, 15));
//        goBack.setBounds(50, 350, 200, 30);
//        goBack.addActionListener(this);
//        panel.add(goBack);

        setVisible(true);
        setSize(800, 450);

        header = new JLabel();
        header.setOpaque(true);
        panel.add(header);

        this.add(panel);
    }

    private void destination() {
        destinationTF = new JTextField();
        destinationTF.setSize(300, 20);
        destinationTF.setLocation(100,100);
        panel.add(destinationTF);
    }

    public void actionPerformed(ActionEvent e){
            User user = new User();
            d = (String) destinationTF.getText();
            user.setDestination(d);
            if (e.getSource() == saveD) {
                tout.setText("Your destination:\n"
                        + d);
                tout.setEditable(false);

            } else if (e.getSource() == buttonNext) {
                UserStay stay = new UserStay();
                stay.setVisible(true);
                dispose();

//            } else if (e.getSource() == goBack) {
//                UserStay stay = new UserStay();
//                stay.setVisible(true);
//                dispose();
            }
        }



    public static void main(String[] args) {
        UserDestination ac = new UserDestination();

    }
}
