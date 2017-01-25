/*
 * Whitecat Blocky Environment, events block definition
 *
 * Copyright (C) 2015 - 2016
 * IBEROXARXA SERVICIOS INTEGRALES, S.L. & CSS IBÉRICA, S.L.
 * 
 * Author: Jaume Olivé (jolive@iberoxarxa.com / jolive@whitecatboard.org)
 * 
 * All rights reserved.  
 *
 * Permission to use, copy, modify, and distribute this software
 * and its documentation for any purpose and without fee is hereby
 * granted, provided that the above copyright notice appear in all
 * copies and that both that the copyright notice and this
 * permission notice and warranty disclaimer appear in supporting
 * documentation, and that the name of the author not be used in
 * advertising or publicity pertaining to distribution of the
 * software without specific, written prior permission.
 *
 * The author disclaim all warranties with regard to this
 * software, including all implied warranties of merchantability
 * and fitness.  In no event shall the author be liable for any
 * special, indirect or consequential damages or any damages
 * whatsoever resulting from loss of use, data or profits, whether
 * in an action of contract, negligence or other tortious action,
 * arising out of or in connection with the use or performance of
 * this software.
 */
'use strict';

goog.provide('Blockly.Blocks.events');

goog.require('Blockly.Blocks');

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.events.HUE = 290;
  
Blockly.Blocks['execute_on'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EXECUTE_ON_EVERY)
	  .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ON_EVERY_BOARD_REBOOT, "1"], [Blockly.Msg.ON_EVERY_RECEIVED_LORA_FRAME, "2"]]), "WHEN");


    this.appendStatementInput('DO')
      .appendField(Blockly.Msg.DO).setAlign(Blockly.ALIGN_RIGHT);
	  
	 this.setPreviousStatement(false, null);
    this.setNextStatement(false, null);
    this.setColour(Blockly.Blocks.events.HUE);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};