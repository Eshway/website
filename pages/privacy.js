import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';

const Privacy = () => (
  <section className="bg-primary-black py-8 sm:pl-16 pl-6 flex flex-col">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full max-w-7xl mx-auto flex flex-col"
    >
      <motion.h1
        variants={textVariant(0.1)}
        className="text-white font-bold lg:text-[34px] md:text-[30px] sm:text-[24px] text-[25px] uppercase font-mono"
      >
        Privacy Policy
      </motion.h1>
      <motion.p
        variants={textVariant(0.2)}
        className="text-gray-400 text-base mb-4"
      >
        Last updated: [Date]
      </motion.p>

      <motion.p
        variants={textVariant(0.3)}
        className="text-gray-400 text-base mb-4"
      >
        Eshway ("we", "our", "us") is committed to protecting your privacy. This
        Privacy Policy explains how your personal data is collected, used, and
        disclosed by Eshway.
      </motion.p>

      <motion.h2
        variants={textVariant(0.4)}
        className="text-white font-bold lg:text-[34px] md:text-[30px] sm:text-[24px] text-[25px] uppercase font-mono"
      >
        1. User Data
      </motion.h2>
      <motion.p
        variants={textVariant(0.5)}
        className="text-gray-400 text-base mb-4"
      >
        We collect information that you provide directly to us, such as when you
        create an account, fill out a form, or communicate with us. This may
        include:
      </motion.p>
      <motion.ul
        variants={textVariant(0.6)}
        className="list-disc pl-6 mb-4 text-gray-400"
      >
        <li>Personal information such as name, email address, phone number.</li>
        <li>Account information such as username and password.</li>
        <li>Any other information you choose to provide.</li>
      </motion.ul>

      <motion.h2
        variants={textVariant(0.7)}
        className="text-white font-bold lg:text-[34px] md:text-[30px] sm:text-[24px] text-[25px] uppercase font-mono"
      >
        2. Permissions and APIs that Access Sensitive Information
      </motion.h2>
      <motion.p
        variants={textVariant(0.8)}
        className="text-gray-400 text-base mb-4"
      >
        Our app may request certain permissions that allow it to access your
        device's data and perform specific functions:
      </motion.p>
      <motion.ul
        variants={textVariant(0.9)}
        className="list-disc pl-6 mb-4 text-gray-400"
      >
        <li>Location data for providing location-based services.</li>
        <li>Camera and photos for profile pictures and other features.</li>
        <li>Contacts for connecting with friends and other users.</li>
      </motion.ul>
      <motion.p
        variants={textVariant(1.0)}
        className="text-gray-400 text-base mb-4"
      >
        We use this information solely to provide and improve our services.
      </motion.p>

      <motion.h2
        variants={textVariant(1.1)}
        className="text-white font-bold lg:text-[34px] md:text-[30px] sm:text-[24px] text-[25px] uppercase font-mono"
      >
        3. Device and Network Abuse
      </motion.h2>
      <motion.p
        variants={textVariant(1.2)}
        className="text-gray-400 text-base mb-4"
      >
        We strictly prohibit any form of abuse or misuse of our application,
        including but not limited to:
      </motion.p>
      <motion.ul
        variants={textVariant(1.3)}
        className="list-disc pl-6 mb-4 text-gray-400"
      >
        <li>Unauthorized access to or alteration of our systems.</li>
        <li>Disruption of our services or networks.</li>
        <li>
          Use of our services to harm others or for any illegal activities.
        </li>
      </motion.ul>

      <motion.h2
        variants={textVariant(1.4)}
        className="text-white font-bold lg:text-[34px] md:text-[30px] sm:text-[24px] text-[25px] uppercase font-mono"
      >
        4. Deceptive Behavior
      </motion.h2>
      <motion.p
        variants={textVariant(1.5)}
        className="text-gray-400 text-base mb-4"
      >
        Our application does not engage in deceptive practices, such as:
      </motion.p>
      <motion.ul
        variants={textVariant(1.6)}
        className="list-disc pl-6 mb-4 text-gray-400"
      >
        <li>Misleading users about the app's functionalities.</li>
        <li>Impersonating other apps or services.</li>
        <li>Using deceptive ads or notifications.</li>
      </motion.ul>

      <motion.h2
        variants={textVariant(1.7)}
        className="text-white font-bold lg:text-[34px] md:text-[30px] sm:text-[24px] text-[25px] uppercase font-mono"
      >
        5. Misrepresentation
      </motion.h2>
      <motion.p
        variants={textVariant(1.8)}
        className="text-gray-400 text-base mb-4"
      >
        We ensure that our app and its functionalities are accurately
        represented. Any claims made about the app's capabilities are truthful
        and not misleading.
      </motion.p>

      <motion.h2
        variants={textVariant(1.9)}
        className="text-white font-bold lg:text-[34px] md:text-[30px] sm:text-[24px] text-[25px] uppercase font-mono"
      >
        6. Google Play's Target API Level Policy
      </motion.h2>
      <motion.p
        variants={textVariant(2.0)}
        className="text-gray-400 text-base mb-4"
      >
        Our application targets an appropriate API level that ensures compliance
        with Google Play's policy. We regularly update our app to meet the
        latest security and functionality standards.
      </motion.p>

      <motion.h2
        variants={textVariant(2.1)}
        className="text-white font-bold lg:text-[34px] md:text-[30px] sm:text-[24px] text-[25px] uppercase font-mono"
      >
        7. SDK Requirements
      </motion.h2>
      <motion.p
        variants={textVariant(2.2)}
        className="text-gray-400 text-base mb-4"
      >
        Any third-party SDKs integrated into our application are vetted to
        ensure they comply with our privacy and security standards. We do not
        use SDKs that compromise user data or security.
      </motion.p>

      <motion.h2
        variants={textVariant(2.3)}
        className="text-white font-bold lg:text-[34px] md:text-[30px] sm:text-[24px] text-[25px] uppercase font-mono"
      >
        8. Changes to This Privacy Policy
      </motion.h2>
      <motion.p
        variants={textVariant(2.4)}
        className="text-gray-400 text-base mb-4"
      >
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. You are
        advised to review this Privacy Policy periodically for any changes.
      </motion.p>

      <motion.h2
        variants={textVariant(2.5)}
        className="text-white font-bold lg:text-[34px] md:text-[30px] sm:text-[24px] text-[25px] uppercase font-mono"
      >
        Contact Us
      </motion.h2>
      <motion.p
        variants={textVariant(2.6)}
        className="text-gray-400 text-base mb-4"
      >
        If you have any questions about this Privacy Policy, please contact us
        at:
      </motion.p>
      <motion.ul
        variants={textVariant(2.7)}
        className="list-disc pl-6 mb-4 text-gray-400"
      >
        <li>Email: business@eshway.com</li>
      </motion.ul>
    </motion.div>
  </section>
);

export default Privacy;
