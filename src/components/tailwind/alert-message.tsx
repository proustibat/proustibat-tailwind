import styles from '@/components/tailwind/alert-message.module.css';

const AlertMessage = () => (
  <section className="p-10">
    <h1 className="my-8 text-2xl">Alert message component</h1>
    <div className="m-10 flex flex-col md:flex-row md:justify-center md:gap-10">
      <div>
        <h2 className="my-8 text-2xl">With CSS</h2>

        <div className={styles.alert}>
          <div className={styles.alertLogoWrap}>
            <img
              className={styles.alertLogo}
              src="/images/tailwind/warning.svg"
              alt="alert"
            />
          </div>
          <div className={styles.alertBody}>
            <h4 className={styles.alertTitle}>Are You Sure?</h4>
            <p className={styles.alertMessage}>
              You are about to delete a post
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="my-8 text-2xl">With Tailwind CSS</h2>

        <div className="flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
          <img
            className="h-12 w-12"
            src="/images/tailwind/warning.svg"
            alt="alert"
          />
          <div>
            <div className="text-xl font-medium text-black">Are you sure?</div>
            <p className="text-slate-500">You are about to delete a post</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AlertMessage;
