import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.net.URISyntaxException;
import java.net.URI;
import java.io.IOException;
import java.awt.*;

public class UserLodging extends JFrame implements ActionListener{
    private JPanel panel;
    private JButton buttonNext, options;
    private JLabel header, lodgingLabel;
    //static JTextField ;
    public UserLodging() {
        super("Where will you stay?");
        this.setResizable(false);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLocationRelativeTo(null);
        this.setVisible(true);
        this.setSize(800, 450);

        panel = new JPanel();
        panel.setLayout(null);

        header = new JLabel();
        header.setOpaque(true);
        panel.add(header);

        lodgingLabel = new JLabel("Where would you like to stay? ");
        lodgingLabel.setBounds(100, 100, 200, 30);
        panel.add(lodgingLabel);

        options = new JButton("options");
        options.setBounds(100, 150, 100, 30);
        options.addActionListener(this);
        panel.add(options);

        buttonNext = new JButton("Finally, view your itinerary");
        buttonNext.setBounds(450, 345, 250, 30);
        buttonNext.addActionListener(this);
        panel.add(buttonNext);
        this.add(panel);
    }

        public void actionPerformed(ActionEvent e){
            if (e.getSource() == buttonNext) {
                UserItinerary ui = new UserItinerary();
                ui.setVisible(true);
                dispose();

            } else if (e.getSource() == options) {
                try {
                    Desktop.getDesktop().browse(new URI("https://www.expedia.com/Hotels?Sitelink=Expedia_Hotels&semcid=US.B.GOOGLE.BT-c-EN.GENERIC&semdtl=a111416148122.b1117302372808.d1474093018635.e1c.f1.g1kwd-12670071.h1e.i17479235985.j19010876.k1.l1g.m1.n1&gclid=EAIaIQobChMIgsvfmPDS9AIVA_HjBx3ongAeEAAYASACEgKpFvD_BwE"));
                } catch (IOException | URISyntaxException e1) {
                    e1.printStackTrace();
                }

            }
            }


    public static void main(String[] args) {
        UserLodging ac = new UserLodging();
    }
}
