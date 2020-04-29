import React from 'react'
import PropTypes from 'prop-types'
import Title from '../Title'
import styles from '../../css/contact.module.css'

const Contact = (props) => {
    return (
        <section className={styles.contact}>
            <Title title="contact" subtitle="us"/>
            <div className={styles.center}>
                <form
                className={styles.form}
                action="https://formspree.io/mwkreonn"
                method="POST">
                    <div>
                        <label htmlFor="name">name</label>
                        <input
                        type="text"
                        className={styles.formControl}
                        id="name"
                        name="name"
                        placeholder="Firstname Lastname">
                        </input>
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input
                        type="email"
                        className={styles.formControl}
                        id="email"
                        name="email"
                        placeholder="email@email.com">
                        </input>
                    </div>
                    <div>
                        <label htmlFor="message">message</label>
                        <textarea
                        rows="10"
                        className={styles.formControl}
                        id="message"
                        name="message"
                        placeholder="Your message...">
                        </textarea>
                    </div>
                    <div>
                        <input
                        type="submit"
                        className={styles.submit}
                        id="submit"
                        name="submit"
                        value="submit">
                        </input>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
