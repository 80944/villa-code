import pyautogui
import time
import pyperclip  # Make sure to install this package

# Function to paste and send a message
def send_message(message):
    pyperclip.copy(message)  # Copy the message to the clipboard
    pyautogui.hotkey('ctrl', 'v')  # Paste message
    pyautogui.press('enter')  # Sending message
    time.sleep(5.1)  # Wait for 200ms before sending the next message

# Main function
def main():
    # Message to be sent
    message = "HE DID IT AGAIN! ELIAAS DID IT🏆 Turned $12 into $3,890, *Pay After Win ✅  *+2️⃣5️⃣4️⃣7️⃣3️⃣8️⃣8️⃣0️⃣1️⃣4️⃣0️⃣1️⃣ (WhatsApp) Ready to WIN? 💰💯 Ready to WIN? 💰💯"

    # Send the message a specified number of times
    for _ in range(300000000000):  # Test with a smaller number initially
        send_message(message)

# Run the main function
if _name_ == "_main_":
    
    main()