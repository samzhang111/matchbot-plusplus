

"""
This script demonstrates how to create a bare-bones, fully functional
chatbot using PyAIML.
"""

# -*- coding: utf-8 -*-
# file: server.py
 
from PyQt4.QtCore import *
import math
import dbus
import dbus.service
from dbus.mainloop.qt import DBusQtMainLoop
import aiml
import sys
from redis import Redis
from hotqueue import HotQueue

# Create a Kernel object.
kern = aiml.Kernel()

# When loading an AIML set, you have two options: load the original
# AIML files, or load a precompiled "brain" that was created from a
# previous run. If no brain file is available, we force a reload of
# the AIML files.
brainLoaded = False
forceReload = False
while not brainLoaded:
	if forceReload or (len(sys.argv) >= 2 and sys.argv[1] == "reload"):
		# Use the Kernel's bootstrap() method to initialize the Kernel. The
		# optional learnFiles argument is a file (or list of files) to load.
		# The optional commands argument is a command (or list of commands)
		# to run after the files are loaded.
		kern.bootstrap(learnFiles="std-startup.xml", commands="load aiml b")
		brainLoaded = True
		# Now that we've loaded the brain, save it to speed things up for
		# next time.
		kern.saveBrain("standard.brn")
	else:
		# Attempt to load the brain file.  If it fails, fall back on the Reload
		# method.
		try:
			# The optional branFile argument specifies a brain file to load.
			kern.bootstrap(brainFile = "standard.brn")
			brainLoaded = True
		except:
			forceReload = True
questions = []
questions.append("what is your favorite color?")
questions.append("how much money do you have in the bank?")
questions.append("what are your first and second favorite animals?")
questions.append("you are in a jungle, hat does that jungle look like?")
questions.append("you are in a room with white walls, what are you doing?")
questions.append("what is ONE THING that you HAVE to know about someone who you are trying to bone?")
answers = []

i = 2

#while(True):
#        i+=1
#	if (i%5 == 0):
#		print questions[i%3]
#		answers.append(raw_input("> "))
#		print kern.respond(answers[-1])
#	elif (i%5 == 4):
#		raw_input("> ")
#	print kern.respond(raw_input("> "), 1)

class Calculator(dbus.service.Object):
  def __init__(self):
    self.sessions = dict();
    busName = dbus.service.BusName('com.chatbot.Chatbot', bus = dbus.SessionBus())
    dbus.service.Object.__init__(self, busName, '/Chatbot')
 
  @dbus.service.method('org.documentroot.Chatbot', in_signature = 'sx', out_signature = 's')
  def chat(self, a, session_id):
    if session_id not in self.sessions:
      self.sessions[session_id] =[2,[]]
    self.sessions[session_id][0] += 1
    i = self.sessions[session_id][0]
    if (i%5 == 0):
        return(questions[i/5])
    elif (i%5 == 1):
       self.sessions[session_id][1].append(a)
    return kern.respond(a)
  
  @dbus.service.method('org.documentroot.Calculator', in_signature = 'x', out_signature = 's')
  def get_answers(self, session_id):
    retval = ""
    for item in self.sessions[session_id][1]:
      retval += item
      retval += "|"
    retval.rstrip("|")
    return retval
  """
  @dbus.service.method('org.documentroot.Calculator', in_signature = 'd', out_signature = 'd')
  def sqrt(self, n): return math.sqrt(n)
 
  @dbus.service.method('org.documentroot.Calculator', in_signature = 'd', out_signature = 'i')
  def round(self, n): return round(n)
  """
DBusQtMainLoop(set_as_default = True)
app = QCoreApplication([])
calc = Calculator()
app.exec_()


