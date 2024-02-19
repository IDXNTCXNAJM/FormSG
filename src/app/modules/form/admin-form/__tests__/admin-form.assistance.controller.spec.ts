/* eslint-disable @typescript-eslint/ban-ts-comment */
import expressHandler from '__tests__/unit/backend/helpers/jest-express'
import { okAsync } from 'neverthrow'
import OpenAI from 'openai'

import {
  handleGenerateFormFields,
  handleGenerateQuestions,
} from '../admin-form.assistance.controller'
import * as AdminFormAssistanceService from '../admin-form.assistance.service'

// Mock openai
jest.mock('openai', () => jest.fn())
const MockedOpenAIClient = jest.mocked(OpenAI)

const mockReturnValue = {
  role: 'user',
  content: 'dummy content',
}

beforeEach(() => {
  jest.clearAllMocks()
  MockedOpenAIClient.prototype.chat = {
    completions: {
      create: jest.fn().mockResolvedValue({
        choices: [
          {
            message: mockReturnValue,
          },
        ],
      }),
    },
  } as any
})

describe('admin-form.assistance.controller', () => {
  beforeEach(() => jest.clearAllMocks())

  describe('handleGenerateQuestions', () => {
    it('should return 200 when questions are successfully generated', async () => {
      // Arrange
      const MOCK_REQ = expressHandler.mockRequest({
        body: {
          type: 'prompt',
          content: 'mock content',
        },
      })
      const mockRes = expressHandler.mockResponse()

      const MOCK_RESULT = 'some result'

      const generateQuestionsSpy = jest
        .spyOn(AdminFormAssistanceService, 'generateQuestions')
        .mockReturnValueOnce(okAsync(MOCK_RESULT) as any)

      // Act
      await handleGenerateQuestions(MOCK_REQ, mockRes, jest.fn())

      // Assert
      expect(generateQuestionsSpy).toHaveBeenCalledOnce()
      expect(mockRes.status).toHaveBeenCalledWith(200)
      expect(mockRes.json).toHaveBeenCalledWith(MOCK_RESULT)
    })

    it('should return 500 when openai server error occurs', async () => {
      // Arrange
      const MOCK_REQ = expressHandler.mockRequest({
        body: {
          type: 'prompt',
          content: 'mock content',
        },
      })
      const mockRes = expressHandler.mockResponse({
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue({
          result: {
            value: 'sample value',
          },
        }),
      })

      // Mock OpenAI API throwing an error
      MockedOpenAIClient.prototype.chat.completions.create = jest
        .fn()
        .mockRejectedValue(new Error('Some random error message'))

      // Act
      await handleGenerateQuestions(MOCK_REQ, mockRes, jest.fn())

      // Assert
      expect(mockRes.status).toHaveBeenCalledWith(500)
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Error while connecting to OpenAI',
      })
    })
  })

  describe('handleGenerateFormFields', () => {
    it('should return 200 when fields are successfully generated', async () => {
      // Arrange
      const MOCK_REQ = expressHandler.mockRequest({
        body: {
          content: 'mock content',
        },
      })
      const mockRes = expressHandler.mockResponse({
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue({
          result: {
            value: 'sample value',
          },
        }),
      })

      // Act
      await handleGenerateFormFields(MOCK_REQ, mockRes, jest.fn())

      // Assert
      expect(mockRes.status).toHaveBeenCalledWith(200)
      expect(mockRes.json).toHaveBeenCalledWith(mockReturnValue)
    })

    it('should return 500 when openai server error occurs', async () => {
      // Arrange
      const MOCK_REQ = expressHandler.mockRequest({
        body: {
          content: 'mock content',
        },
      })
      const mockRes = expressHandler.mockResponse({
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue({
          result: {
            value: 'sample value',
          },
        }),
      })

      // Mock OpenAI API throwing an error
      MockedOpenAIClient.prototype.chat.completions.create = jest
        .fn()
        .mockRejectedValue(new Error('Some random error message'))

      // Act
      await handleGenerateFormFields(MOCK_REQ, mockRes, jest.fn())

      // Assert
      expect(mockRes.status).toHaveBeenCalledWith(500)
      expect(mockRes.json).toHaveBeenCalledWith({
        message: 'Error while connecting to OpenAI',
      })
    })
  })
})