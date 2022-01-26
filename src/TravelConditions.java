
import javax.imageio.ImageIO;
import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.image.BufferedImage;
import java.awt.image.RenderedImage;
import java.io.*;
import java.net.URL;

public class TravelConditions extends JFrame implements ActionListener {
    private String location;
    private JButton back;
    private JPanel contentPane;
    private JLabel l1; // add this line to set it global.
    /**
     * Launch the application.
     */
    public static void main(String[] args) {
        EventQueue.invokeLater(new Runnable() {
            public void run() {
                try {
                    TravelConditions frame = new TravelConditions();
                    frame.setVisible(true);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        });

    }

    /**
     * Create the frame.
     */
    public void DailyForecast() throws IOException {
        BufferedImage image;
        URL url = new URL("http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=0");
        InputStream is = url.openStream();
        OutputStream os = new FileOutputStream("image.jpg");
        byte[] b = new byte[2048];
        int length;

        //response as a string and parse as a json, then populate an object with that json, then use it to formulate a table
        while ((length = is.read(b)) != -1) {
            os.write(b, 0, length);
        }

        is.close();
        os.close();

        //http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=0
    }
    public TravelConditions() {
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setBounds(300, 200, 300, 300);
        contentPane = new JPanel();
        contentPane.setBorder(new EmptyBorder(5, 5, 5, 5));
        setContentPane(contentPane);
        contentPane.setLayout(null);

        l1 = new JLabel("View image.jpg for\nweather API output");
        l1.setBounds(30, 38, 200, 14);
        contentPane.add(l1);
        try {
            DailyForecast();
        } catch (IOException e) {
            e.printStackTrace();
        }

        back = new JButton("Back to Stay");
        back.setFont(new Font("Arial", Font.PLAIN, 15));
        back.setBounds(100, 100, 150, 30);
        back.addActionListener(this);
        contentPane.add(back);
    }
        public void actionPerformed(ActionEvent e){
            if (e.getSource() == back) {
                UserStay uc = new UserStay();
                uc.setVisible(true);
                dispose();
            }
}
}
